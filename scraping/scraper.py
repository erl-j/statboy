# import libraries
from bs4 import BeautifulSoup,Tag, NavigableString
import requests
from functools import reduce
import time



def parseDateList(ul):
    out=[]
    for day in ul.contents:
        # print(day)
        str=""
        if not isinstance(day,NavigableString):
            for tag in day.contents:
                if tag.name=="a":
                   str+=tag["title"]
                elif tag.name=="ul":
                    out=out+[str+e for e in parseDate(tag)]
                    str=""
                elif isinstance(tag.string,NavigableString):
                    str+=tag.string
            out.append(str)
    return out

def parseDate(ul):
    out=[]
    for ev in ul.contents:
        if not isinstance(ev,NavigableString):
            str=""
            for tag in ev.contents:
                if tag.name=="a":
                        str+=tag["title"]
                elif isinstance(tag.string,NavigableString):
                        str+=tag.string
            out.append(str)
    return out

id=0
f = open("Dates/events.json".format(), "w")
f.write("dates=[")
for d in range(0,2000): 

    print("scraping article for year {}".format(d))
    

    url = "https://en.wikipedia.org/wiki/{}".format(d)
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")

    

    try:
        el = soup.find("span", attrs={"id": "Events"}).parent
        events=[]
        while True:
            el=el.next_sibling
            if el.name=="h2":
                break
            if el.name == "ul":
                m=parseDateList(el)
                m=[o.replace("\n"," - ") for o in m]
                events=events+list(filter(lambda x: len(x)>3, m))
            
        for e in events:
            f.write("\n{{\"id\": {}, \"q\": \"{}\",\"unit\": \"year\", \"a\": {} }},".format(id,e.replace("\"","\'"),d))
            id=id+1
        time.sleep(1)
    
    except:
        print("Error while scraping article for year {}".format(d))
        pass

f.write("]")