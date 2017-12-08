require 'open3'
require 'json'

location_ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]

locations: [[82, 76], [96, 44], [50, 5], [49, 8], [13, 7], [29, 89], [58, 30], [84, 39], [14, 24], [12, 39], [3, 82], [5, 10], [98, 52], [84, 25], [61, 59], [1, 65], [88, 51], [91, 2], [19, 32], [93, 3], [50, 93], [98, 14], [5, 42], [42, 9], [61, 62], [9, 97], [80, 55], [57, 69], [23, 15], [20, 70], [85, 60], [98, 5]]

duration_per_location:  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
data = {:location_ids, :locations, :duration_per_location}

json = JSON.dump(data)
stdin, stdout, stderr = Open3.popen3("/ortools_d/examples/python/cvrptw_mowflow_wip.py")
stdin.write(json)
stdin.close()
json = JSON.parse(stdout.read())
puts json

# {
# 	"id": "0001",
# 	"type": "donut",
# 	"name": "Cake",
# 	"ppu": 0.55,
# 	"batters":
# 		{
# 			"batter":
# 				[
# 					{ "id": "1001", "type": "Regular" },
# 					{ "id": "1002", "type": "Chocolate" },
# 					{ "id": "1003", "type": "Blueberry" },
# 					{ "id": "1004", "type": "Devil's Food" }
# 				]
# 		},
# 	"topping":
# 		[
# 			{ "id": "5001", "type": "None" },
# 			{ "id": "5002", "type": "Glazed" },
# 			{ "id": "5005", "type": "Sugar" },
# 			{ "id": "5007", "type": "Powdered Sugar" },
# 			{ "id": "5006", "type": "Chocolate with Sprinkles" },
# 			{ "id": "5003", "type": "Chocolate" },
# 			{ "id": "5004", "type": "Maple" }
# 		]
# }