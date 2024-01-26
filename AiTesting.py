<<<<<<<<< Temporary merge branch 1
# import openai
# import os
# openai.api_key = os.getenv('OPENAI_API_KEY')

# print(openai.api_key)

# messages = []

# system_message = "This is a system message to start the chat."
# messages.append({"role": "system", "content": system_message})

# while True:
#     user_message = input("You: ")
#     if user_message.lower() == "exit":
#         break
#     messages.append({"role": "user", "content": user_message})

#     try:
#         response = openai.ChatCompletion.create(
#             model="text-davinci-003",
#             messages=messages,
#             max_tokens=100
#         )
#         print("AI:", response.choices[0].message.content)
#     except Exception as e:
#         print(f"An error occurred: {e}")

#     # Debug prints
#     # print("Debug - Messages:", messages)
#     # print("Debug - User Message:", user_message)
#     # print("Debug - Response:", response)


from openai import OpenAI
client = OpenAI()
messages = []
system_message = input ("What type of chatbot you want me to be?")
messages.append({"role": "system", "content": system_message})
print("Alright! I am ready to be your friendly chatbot" + "In" + "You can now type your messages.")
message = input("")
messages.append({"role": "user", "content": message})
response=client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=messages
)
print(response.choices[0].message)
=========
def random_function*(a, b):
    return a + b
>>>>>>>>> Temporary merge branch 2
