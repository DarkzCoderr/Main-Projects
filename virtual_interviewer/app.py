# app.py

import streamlit as st
import os
import tempfile
from modules import resume_parser, question_generator
from dotenv import load_dotenv

load_dotenv()

st.set_page_config(page_title="Virtual Interviewer", layout="centered")
st.title("🧠 AI Virtual Interviewer")
st.write("Upload your resume and get customized technical interview questions.")

uploaded_file = st.file_uploader("📄 Upload your resume (PDF)", type=["pdf"])

if uploaded_file is not None:
    with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp_file:
        tmp_file.write(uploaded_file.read())
        file_path = tmp_file.name

    with st.spinner("🔍 Parsing resume..."):
        parsed_data = resume_parser.parse_resume(file_path)
        st.success("Resume parsed successfully.")

        st.subheader("🧠 Resume Summary")
        st.markdown(f"**Skills:** {', '.join(parsed_data['skills']) or 'N/A'}")
        st.markdown(f"**Experience:** {', '.join(parsed_data['experience']) or 'N/A'}")
        st.markdown(f"**Education:** {', '.join(parsed_data['education']) or 'N/A'}")

    with st.spinner("🤖 Generating interview questions..."):
        questions = question_generator.generate(parsed_data)
        st.subheader("📝 Interview Questions")
        for i, q in enumerate(questions, start=1):
            st.markdown(f"**Q{i}.** {q}")
