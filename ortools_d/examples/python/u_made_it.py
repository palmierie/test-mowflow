import sys
import json

raw = sys.stdin.read()
data = json.loads(raw)
data["response"] = "U MADE IT SON!  PYTHON AWAY!"
print (json.dumps(data))