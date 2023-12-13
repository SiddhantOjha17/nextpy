import nextpy as xt

from nextpy_chat import styles
from nextpy_chat.State.interview import InterviewState
from nextpy_chat.components import features


def navbar():
    return xt.box(
        xt.hstack(
            xt.hstack(
                xt.icon(
                    tag="hamburger",
                    # on_click=InterviewState.toggle_drawer,
                    cursor="pointer",
                    style=styles.navbar_hamburger
                ),
                xt.link(
                    xt.box(
                        xt.image(src="/favicon.ico",
                                 width="1.2em", height="auto"),
                        style=styles.navbar_favicon
                    ),
                    href="/",
                ),
                xt.breadcrumb(
                    xt.breadcrumb_item(
                        xt.text(
                            InterviewState.interview_chat,
                            style=styles.navbar_current_chat
                        ),
                    ),
                ),
            ),
            xt.hstack(
                xt.hstack(
                    xt.image(
                        src="/Frame.svg",
                        style=styles.navbar_frame,
                        class_name=styles.navbar_frame_tailwind
                    ),
                    xt.input(
                        placeholder="Prepare for your Interviews ...",
                        display=["none", "none", "none", "flex", "flex"],
                        _placeholder={"color": "#6C7275", "font_size": "13px"},
                        style=styles.navbar_input,
                        variant="unstyled",
                    ),
                    style=styles.navbar_hstack_1
                ),
                features.features(),
                xt.menu(
                    xt.menu_button(
                        xt.avatar(name="User", size="sm"),
                        xt.box(),
                    ),
                    xt.menu_list(
                        xt.menu_item("Help"),
                        xt.menu_divider(),
                        xt.menu_item("Settings"),
                    ),
                ),
                style=styles.navbar_hstack_2
            ),
            style=styles.navbar_hstack
        ),
        style=styles.navbar
    )
