# modules/question_generator.py

import os
import requests
from dotenv import load_dotenv

load_dotenv()

HF_TOKEN = os.getenv("HF_API_TOKEN")
API_URL = "https://api-inference.huggingface.co/models/google/flan-t5-large"

headers = {
    "Authorization": f"Bearer {HF_TOKEN}"
}


def generate(parsed_resume):
    # Generate a compact prompt for flan-t5-large
    skills = ', '.join(parsed_resume.get('skills', []))
    experience = ', '.join(parsed_resume.get('experience', []))
    education = ', '.join(parsed_resume.get('education', []))

    prompt = f"Generate 5 technical interview questions for a candidate with skills: {skills}; experience: {experience}; and education: {education}."

    payload = {
        "inputs": prompt,
        "parameters": {
            "max_new_tokens": 200,
            "temperature": 0.7,
        }
    }

    try:
        response = requests.post(API_URL, headers=headers, json=payload)
        print("Response code:", response.status_code)

        if response.status_code != 200:
            print("Response text:", response.text)
            return [f"Error: API returned status code {response.status_code}"]

        result = response.json()

        if isinstance(result, list) and "generated_text" in result[0]:
            raw_text = result[0]["generated_text"]
        elif isinstance(result, dict) and "generated_text" in result:
            raw_text = result["generated_text"]
        elif isinstance(result, str):
            raw_text = result
        else:
            print("Unexpected API response format:", result)
            return ["Error: Unexpected response format from Hugging Face API"]

        # Clean and extract questions
        questions = [line.strip("-• ").strip() for line in raw_text.split("\n") if line.strip()]
        return questions

    except requests.exceptions.RequestException as e:
        return [f"Request failed: {e}"]
    except ValueError as e:
        print("Response text (invalid JSON):", response.text)
        return [f"Invalid response from Hugging Face API: {e}"]
    except Exception as e:
        return [f"Unexpected error: {e}"]
