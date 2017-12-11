import sys
import json

raw = sys.stdin.read()
data = json.loads(raw)
res_obj = {"response_object": "title",
            "inner_array": [
              "thing_1",
              "thing_2",
              "thing_3",
              "thing_4"  
            ]
          }

def sub(one, two):
  return one - two

def add(one, two):
  return one + two

subanswer = sub(2,4)

answer = add(2,4)
# data["response"] = "U MADE IT SON!  PYTHON AWAY!"
# data["response"] = res_obj
# data["response"] = answer

# print (json.dumps('data'))
print (json.dumps(answer))