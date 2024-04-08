import mysql.connector
import pandas as pd

mydb = mysql.connector.connect(
    host= "localhost",
    user= "root",
    password= "root",
    database= "st"
)
sql_query = "SELECT * FROM sc"

# Execute the SQL query
cursor = mydb.cursor()
cursor.execute(sql_query)

rows = cursor.fetchall()
column_names = [desc[0] for desc in cursor.description]

df = pd.DataFrame(rows, columns=column_names)

# batch_data = df[df['trip_id'] == 1]
# print(len(batch_data['latitude']))

print(df)
cursor.close()
mydb.close()