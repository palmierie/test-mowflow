import sys
import json

raw = sys.stdin.read()
data = json.loads(raw)
data["response"] = "Howdy from python"
x = data["a"]
a = x + 4
data["a"] = a
print (json.dumps(data))