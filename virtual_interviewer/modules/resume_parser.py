# modules/resume_parser.py

import os
import re
from pdfminer.high_level import extract_text

def extract_resume_text(file_path):
    if file_path.endswith(".pdf"):
        return extract_text(file_path)
    return "Unsupported file format."

def parse_resume(file_path):
    text = extract_resume_text(file_path)

    # Very simple parsers
    skills = re.findall(r"(Python|Java|C\+\+|Machine Learning|AI|NLP|SQL|TensorFlow|Pandas)", text, re.IGNORECASE)
    education = re.findall(r"(B\.?Tech|M\.?Tech|Bachelor|Master|Ph\.?D)", text, re.IGNORECASE)
    experience = re.findall(r"(\d+ years|internship|project)", text, re.IGNORECASE)

    return {
        "text": text,
        "skills": list(set(skills)),
        "education": list(set(education)),
        "experience": list(set(experience)),
    }
