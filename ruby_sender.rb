require 'open3'
require 'json'

location_ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]

locations = [[82, 76], [96, 44], [50, 5], [49, 8], [13, 7], [29, 89], [58, 30], [84, 39], [14, 24], [12, 39], [3, 82], [5, 10], [98, 52], [84, 25], [61, 59], [1, 65], [88, 51], [91, 2], [19, 32], [93, 3], [50, 93], [98, 14], [5, 42], [42, 9], [61, 62], [9, 97], [80, 55], [57, 69], [23, 15], [20, 70], [85, 60], [98, 5]]

duration_per_location = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
data = {location_ids: location_ids, locations: locations, duration_per_location: duration_per_location}
json = JSON.dump(data)

# block form
Open3.popen3("python ./ortools_d/examples/python/cvrptw_mowflow_wip.py"){|stdin, stdout, stderr, wait_thr|
  pid = wait_thr[:pid]
  stdin.write(json)
  stdin.close()
  stderr.close()
  exit_status = wait_thr.value
  pythondata = stdout.read()
  json = JSON.parse(pythondata)
  puts json
}