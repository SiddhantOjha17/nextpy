import nextpy as xt
from nextpy_chat import styles
from nextpy_chat.components import loading_icon
from nextpy_chat.State.main import QA, MainState


def message(qa: QA) -> xt.Component:
    """A single question/answer message.

    Args:
        qa: The question/answer pair.

    Returns:
        A component displaying the question/answer pair.
    """
    return xt.box(
        xt.box(
            xt.image(
                src='/avatar.png', width='25px', height='25px', class_name="bg-[#7e57c2] rounded-full ml-2"
            ),
            xt.text(
                qa.question,
                style=styles.message_question_text,
                font_size='15.25px',
                color="#E3E3E3",
                **styles.message_style
            ),
            style=styles.message_question_box,
            class_name=styles.message_question_box_tailwind
        ),
        xt.box(
            xt.hstack(
                xt.image(
                    src='/avatar_smile.png', width='25px', height='25px'
                ),
                xt.vstack(
                    xt.markdown(
                        qa.answer,
                        style=styles.message_answer_markdown
                    ),
                    class_name=styles.message_answer_vstack_tailwind
                ),
            ),
            xt.hstack(
                xt.button(
                    xt.image(src='/thumbs-up.png'),
                    on_click=MainState.toggle_like(qa.index),
                    style=styles.reaction_button,
                    padding='0.5',
                    class_name="border border-[#393E44] w-6",
                    bg='#111111',
                    _hover={
                        "bg": '#111111',
                    },
                ),
                xt.button(
                    xt.image(src='/thumbs-down.png'),
                    on_click=MainState.toggle_dislike(qa.index),
                    style=styles.reaction_button,
                    padding='0.5',
                    class_name="border border-[#393E44] w-6",
                    bg='#111111',
                    _hover={
                        "bg": '#111111',
                    },

                ),
                xt.button(
                    xt.image(src='/share-06.png'),
                    on_click=MainState.toggle_dislike(qa.index),
                    style=styles.reaction_button,
                    padding='0.5',
                    class_name="border border-[#393E44] w-6",
                    bg='#111111',
                    _hover={
                        "bg": '#111111',
                    },

                ),
                xt.button(
                    xt.image(src='/mirror.png'),
                    on_click=MainState.toggle_dislike(qa.index),
                    style=styles.reaction_button,
                    padding='0.5',
                    class_name="border border-[#393E44] w-6",
                    bg='#111111',
                    _hover={
                        "bg": '#111111',
                    },
                ),
                px='9'
            ),
            text_align="left",
            bg=styles.bg_dark_color,
            p='4',
            width="100%",
            class_name="rounded-lg"
        ),
        width="100%",
    )


def chat() -> xt.Component:
    """List all the messages in a single conversation."""
    return xt.vstack(
        xt.card(
            xt.hstack(
                xt.image(
                    src="/logo.png",
                    style=styles.chat_card_image
                ),
                xt.text(
                    "Hello! Welcome to NextpyGPT",
                    style=styles.chat_card_text
                )
            ),
            style=styles.chat_card,
            display=MainState.display_val
        ),
        xt.box(
            xt.foreach(
                MainState.chats[MainState.current_chat],
                message
            ),
        ),
        style=styles.chat_vstack,
        class_name=styles.chat_vstack_tailwind
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
                            value=MainState.question,
                            on_change=MainState.set_question,
                            variant="unstyled",

                            style=styles.action_bar_input
                        ),
                        xt.button(
                            xt.cond(
                                MainState.processing,
                                loading_icon(height="1em"),
                                xt.image(
                                    src="send.svg", width="1.5em", height="auto"
                                ),
                            ),
                            type_="submit",
                            style=styles.action_bar_button
                        )
                    ),
                    is_disabled=MainState.processing,
                    style=styles.action_bar_style
                ),
                on_submit=MainState.process_question,
            ),
            style=styles.action_bar_vstack
        ),
        style=styles.action_bar_box
    )
