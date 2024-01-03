import nextpy as xt
from nextpy_chat import styles
from nextpy_chat.components import loading_icon
from nextpy_chat.State.interview import QA, InterviewState


def message(qa: QA) -> xt.Component:
    return xt.box(
        xt.box(
            xt.hstack(
                xt.image(
                    src='/avatar_smile.png', width='25px', height='25px'
                ),
                xt.text(
                    qa.question,
                    style=styles.interview_message_question_text
                ),
            ),
            text_align="left",
            style=styles.interview_message_question_box,
            class_name=styles.interview_message_question_box_tailwind
        ),
        xt.box(
            xt.image(
                src='/avatar.png', width='25px', height='25px'
            ),
            xt.text(
                qa.answer,
                # Using main page chat_question_text style here
                style=styles.message_question_text,
                **styles.message_style
            ),
            style=styles.interview_message_answer_box,
            class_name=styles.interview_message_answer_box_tailwind,
        ),
        style=styles.interview_message
    )


def chat() -> xt.Component:
    """List all the messages in a single conversation."""
    return xt.vstack(
        xt.vstack(
            xt.card(
                xt.hstack(
                    xt.image(
                        src="/logo.png",
                        style=styles.interview_chat_card_image
                    ),
                    xt.text(
                        "Add job description or job keyword below and press submit to start with interview",
                        style=styles.interview_chat_card_text,
                        class_name="md:text-base text-xs"
                    )
                ),
                style=styles.interview_chat_card
            ),
            xt.form(
                xt.text_area(
                    value=InterviewState.job_desc,
                    is_required=True,
                    placeholder='Enter Job Description',
                    on_change=InterviewState.set_job_desc,
                ),
                xt.form_control(
                    xt.button(
                        xt.text('Submit'),
                        type_='submit',
                        style=styles.interview_chat_button,
                        class_name=styles.interview_chat_button_tailwind
                    ),
                ),
                on_submit=InterviewState.process_interview
            ),
            m='6em',
            display=InterviewState.interview_option
        ),
        xt.box(
            xt.foreach(
                InterviewState.interview_chats[InterviewState.interview_chat], message)
        ),
        style=styles.interview_chat,
        class_name=styles.interview_chat_tailwind
    )


def action_bar() -> xt.Component:
    """The action bar to send a new message."""
    return xt.box(
        xt.vstack(
            xt.form(
                xt.form_control(
                    xt.hstack(
                        xt.input(
                            placeholder="Type something...",
                            value=InterviewState.interview_answer,
                            on_change=InterviewState.set_interview_answer,
                            style=styles.action_bar_input
                        ),
                        xt.button(
                            xt.cond(
                                InterviewState.recording,
                                xt.image(src="/listen.png",
                                         width="2em", height="auto"),
                                xt.image(src="/mike.png",
                                         width="2em", height="auto"),
                            ),
                            on_click=InterviewState.start_recording,
                            style=styles.interview_recording_button
                        ),
                        xt.button(
                            xt.cond(
                                InterviewState.interview_processing,
                                loading_icon(height="1em"),
                                xt.image(src="/send.svg",
                                         width="1.5em", height="auto"),
                            ),
                            type_="submit",
                            style=styles.action_bar_button
                        )
                    ),
                    is_disabled=InterviewState.interview_processing,
                    style=styles.action_bar_style
                ),
                on_submit=InterviewState.process_interview,
            ),
            style=styles.action_bar_vstack
        ),
        style=styles.action_bar_box,
        display=InterviewState.interview_convo
    )
