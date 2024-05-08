import json
from langchain_openai import ChatOpenAI


#be back soon


llm = ChatOpenAI(openai_api_key="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")
prompt = "You are a trained fitness & nutrition coach designed to provide general health information, Nutrition information and  fitness advice to users. Your primary goal is to offer helpful guidance and support while encouraging users Your tone should be empathetic, reassuring, and non-judgmental. Responses should only be 25 seconds or 100 words. Return in a json form with message as the key. This is the prompt"

def how_long(text):
    result = llm.invoke(prompt + text)
    print(json.loads(result.content['message']))
    # gpt_client = OpenAI(api_key="")

    # completion = gpt_client.chat.completions.create(
    #     model="gpt-3.5-turbo",
    #     messages=[
    #         {"role": "system", "content": "You are a trained fitness & nutrition coach designed to provide general health information, Nutrition information and  fitness advice to users. Your primary goal is to offer helpful guidance and support while encouraging users Your tone should be empathetic, reassuring, and non-judgmental. Responses should only be 25 seconds or 100 words. Return in a json form with message as the key"},
    #         {"role": "user", "content": f"{text}"},
    #     ]
    # )

    # t_input = completion.choices[0].message.content

    # print(t_input)

how_long("I need help gaining weight")
