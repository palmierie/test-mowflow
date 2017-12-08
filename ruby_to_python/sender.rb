require 'open3'
require 'json'

data = {a: 1}
json = JSON.dump(data)
stdin, stdout, stderr = Open3.popen3("python receiver.py")
stdin.write(json)
stdin.close()
json = JSON.parse(stdout.read())
puts json