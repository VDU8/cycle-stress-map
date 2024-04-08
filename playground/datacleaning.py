import pandas as pd
import numpy as np
import json


# Path to your JSON file
jp1 = '/home/virajupadhyay/Desktop/Stress-Map/cycle-stress-map/playground/tripid5-osrmresponse.json'
jp2 = '/home/virajupadhyay/Desktop/Stress-Map/cycle-stress-map/playground/tripid7-osrmresponse.json'
# Read JSON data from file into a Python variable
with open(jp1, 'r') as file:
    df1 = json.load(file)

with open(jp2, 'r') as file:
    df2 = json.load(file)

def extract_nodes(matchings):
    all_nodes = []
    for matching in matchings:
        for leg in matching.get("legs", []):
            nodes = leg.get("annotation", {}).get("nodes", [])
            all_nodes.extend(nodes)
    return all_nodes

# Extract nodes from the JSON data
nodes5 = extract_nodes(df1.get("matchings", []))
nodes7 = extract_nodes(df2.get("matchings", []))

# Print the extracted nodes
print("Nodes of tripid5:", nodes5)
print(len(nodes5))
print("Nodes of tripid7:", nodes7)
print(len(nodes7))

common_values = set(nodes5) & set(nodes7)
print(common_values)



# df1 = pd.read_json("/home/virajupadhyay/Desktop/Stress-Map/cycle-stress-map/playground/tripid5.json")

# df2 = pd.read_json("/home/virajupadhyay/Desktop/Stress-Map/cycle-stress-map/playground/tripid7.json")

# df = df[df['trip_id'] == 1]

# # Assuming df is your DataFrame with columns: 'latitude', 'longitude', 'speed', 'timestamp', 'trip_id'
# window_size = 3  # Adjust this based on your preference

# # Define a function to apply rolling mean to chunks of 10 consecutive rows within each trip_id
# def apply_rolling_mean(group):
#     group['smoothed_latitude'] = group['latitude'].rolling(window=window_size, min_periods=1).mean()
#     group['smoothed_longitude'] = group['longitude'].rolling(window=window_size, min_periods=1).mean()
#     return group

# # Apply rolling mean to chunks of 10 consecutive rows within each trip_id
# df_smoothed = df.groupby('trip_id', group_keys=False).apply(lambda x: x.groupby(x.index // window_size).apply(apply_rolling_mean))
# print(df_smoothed)
# # Save the smoothed data as JSON
# df_smoothed.to_json("/home/virajupadhyay/Desktop/Stress-Map/cycle-stress-map/playground/tripidtest.json", orient='records', lines=False)


# Select a specific trip_id (replace 1 with the desired trip_id)
# selected_trip_id = 5
# selected_data = df[df['trip_id'] == selected_trip_id]

# # Include every 50th latitude and longitude
# selected_data = selected_data.iloc[::40, :]

# # Construct the URL
# waypoints = [f"{lon},{lat}" for lat, lon in zip(selected_data['latitude'], selected_data['longitude'])]

# print(url)