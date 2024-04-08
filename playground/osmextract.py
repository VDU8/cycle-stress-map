import overpass
import overpy
import json
import re
import pandas as pd
import numpy as np
 
# Opening JSON file
f = open('/home/virajupadhyay/Desktop/Stress-Map/cycle-stress-map/playground/tripid1.json')
t5 = open('/home/virajupadhyay/Desktop/Stress-Map/cycle-stress-map/playground/tripid5-osrmresponse.json')
# returns JSON object as 
# a dictionary
data = json.load(t5)
data_co = json.load(f)

def extract_nodes(json_obj):
    nodes = []

    def recursive_extract(obj):
        nonlocal nodes
        if isinstance(obj, dict):
            for key, value in obj.items():
                if key == 'nodes' and isinstance(value, list):
                    nodes.extend(value)
                else:
                    recursive_extract(value)
        elif isinstance(obj, list):
            for item in obj:
                recursive_extract(item)

    recursive_extract(json_obj)
    return nodes

all_nodes = extract_nodes(data)
print(all_nodes)

op = overpy.Overpass()

df = pd.DataFrame(data_co)
df_filtered = df[df['trip_id'].isin([5, 7])]
df_filtered = df_filtered.head(1000)
# print(df)
# # print(df)

# res = op.query("""
#     way["cycleway"](around:10, 33.824857, -84.339962);
#         out;
# """)

roads_query = op.query("""
        [out:json];
        way(around:20, 33.82493, -84.338806);
        out center;
                       >;
        out body;
    """)
# # nodeq = op.query("""[out:json];
# # node(4590977835);
# # out;""")
# for way in roads_query.ways:
#     print(f"Way ID: {way.id}")
#     # print(f"Center Coordinates: {way.center_lat}, {way.center_lon}")
#     print("Nodes:")
#     for node in way.nodes:
#         print(f"  Node ID: {node}")
#     print("\n")
# print(nodeq.nodes)
# ways = roads_query.ways

# print(ways)

# #print(result)

# #node = result.nodes
# #ways = res.ways
# #print(node)
# print("Cycleways", res.ways)

# for way in res.ways:
#     way_name = way.tags.get('name', 'N/A')
#     print(f"Cycle Path ID: {way.id}, Name: {way_name}")


# print("Roads", roads_query.ways)
# # print(df)

# for way in roads_query.ways:
#     way_name = way.tags.get('name', 'N/A')
#     print(f"Cycle Path ID: {way.id}, Name: {way_name}")


result_df = pd.DataFrame(columns=['trip_id', 'way_name', 'way_nodes', 'latitude', 'longitude', 'Node_id'])

# # # # Loop through rows in the original DataFrame
for index, row in df_filtered.iterrows():
    # Extract trip_id, latitude, and longitude from the current row
    trip_id = row['trip_id']
    latitude = row['latitude']
    longitude = row['longitude']

#     # Query Overpass API for cycleways around the current latitude and longitude
#     # res = op.query(f"""
#     #     way["cycleway"="*"](around:10, {latitude}, {longitude});
#     #     out;
#     # """)
#     print(latitude,longitude)
    roads_query = op.query("""
        [out:json];
        way(around:20, {lat}, {lon});
        out center;
        >;
        out body;
    """.format(lat=latitude, lon=longitude))
    
    way_nodes = roads_query.ways
    
    for way in roads_query.ways:

        print(f"Way ID: {way.id}")
        way_name = way.tags.get('name', 'N/A')
        # print(f"Center Coordinates: {way.center_lat}, {way.center_lon}")
        print("Nodes:")
        for node in way.nodes:
            node_coords = pd.DataFrame({
                'trip_id' : trip_id,
                'Node_id': node.id,
                'latitude': node.lat,
                'longitude': node.lon,
                'way_name': way_name,
                'way_nodes': way_nodes,

            })
            print(f"  Node ID: {node}")
        print("\n")
        
        way_name = way.tags.get('name', 'N/A')

        # Append the result to the result DataFrame
        # current_result = pd.DataFrame({
        #     'trip_id': trip_id,
        #     'way_name': way_name,
        #     'way_nodes': way_nodes,
        #     # 'way_coords': way_coords
        # })
        result_df = pd.concat([result_df, node_coords], ignore_index=True)
    # print(roads_query.ways)
    # for way in roads_query.ways:
    #     way_name = way.tags.get('name', 'N/A')
    #     print(f"Cycle Path ID: {way.id}, Name: {way_name}")


    # else:
    #     print(res.ways)
    #     for way in res.ways:
    #         way_name = way.tags.get('name', 'N/A')
    #         print(f"Cycle Path ID: {way.id}, Name: {way_name}")

    #     # Loop through ways in the query result
    #     for way in res.ways:
    #         way_id = way.id
    #         way_name = way.tags.get('name', 'N/A')
    #         way_nodes = [node.id for node in way.nodes]
    #         way_tags = way.tags

    #         # Append the result to the result DataFrame
    #         result_df = result_df.append({
    #             'trip_id': trip_id,
    #             'way_id': way_id,
    #             'way_name': way_name,
    #             'way_nodes': way_nodes,
    #             'way_tags': way_tags
    #         }, ignore_index=True)

# Display the result DataFrame
print(result_df)

# # result_df['node_values'] = result_df['way_nodes'].str.extractall(r'(\d+)').unstack().apply(lambda x: x.dropna().astype(int).tolist(), axis=1)

# # print(result_df)


# nodeq = op.query("""[out:json];
# node(4590977835);
# out;""")

for target_name in all_nodes:
    # Check if the target name exists in the 'Name' column
    if target_name in result_df['Node_id'].values:
        # Print corresponding values from other columns
        matching_row = result_df[result_df['Node_id'] == target_name]
        print(f"Node_id: {target_name}, Lat: {matching_row['latitude'].values[0]}, Long: {matching_row['longitude'].values[0]}")
    else:
        print(f"No matching record for {target_name}")




















# # Overpass API calls
# # query = """
# # way["cycleway"](around:10, 33.824857, -84.339962);
# # out geom;
# # """


# Getting Keys Hiararchy
# def get_all_keys(json_obj, prefix=""):
#     if isinstance(json_obj, dict):
#         for key, value in json_obj.items():
#             full_key = f"{prefix}.{key}" if prefix else key
#             yield full_key
#             yield from get_all_keys(value, full_key)
#     elif isinstance(json_obj, list):
#         for i, item in enumerate(json_obj):
#             full_key = f"{prefix}[{i}]"
#             yield full_key
#             yield from get_all_keys(item, full_key)


# all_keys = list(get_all_keys(data))
# print(all_keys)
