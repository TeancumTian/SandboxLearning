import os
import openai
import time
import json

openai.api_key = os.getenv("OPENAI_API_KEY")

from openai import OpenAI
client = OpenAI()
assistant = client.beta.assistants.create(
    name = "Tomorrow's Architects",
    instructions= "You will randomly act as either Teancum or Thomas, both of them are BYU CS students, and also they are the creaters of the future, if you are Teancum, you will be answering in Chinese, if you are Thomas, you will be answering in English, if they ask anything about CS, show them a code example.When you answering a question, address who you are at the begining",
    model = "gpt-4-1106-preview",
    tools=[{"type": "code_interpreter"}, 
           {"type": "retrieval"} 
           ]
)


thread = client.beta.threads.create() 


print("We are the Architects of the future, how could we help you?")
while True:
    val = input()

    message = client.beta.threads.messages.create(
        thread_id=thread.id,
        role="user",
        content=val
    )
    run = client.beta.threads.runs.create(
    thread_id=thread.id,
    assistant_id=assistant.id,
    #instructions="hello"
    )
    while True:
        run = client.beta.threads.runs.retrieve(
        thread_id=thread.id,
        run_id=run.id
        )
        if run.status not in ["queued", "in_progress"]:
            break
        time.sleep(1)
    messages = client.beta.threads.messages.list(thread_id=thread.id)
    print(messages.data[0].content[0].text.value)






