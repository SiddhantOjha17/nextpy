import nextpy as xt

from nextpy_chat import styles


def features() -> xt.Component:
    """Various features for menu"""
    return (
        xt.menu(
            xt.menu_button(
                xt.image(src="/Vector.svg", width="1.2em", height="auto"),
                class_name=styles.features_button_tailwind
            ),
            xt.menu_list(
                xt.menu_item(
                    xt.link(
                        xt.hstack(
                            xt.image(
                                src='/logo.png', width='25px', height='25px', mx='4px'
                            ),
                            xt.text(
                                "NEXTPY GPT",
                                style=styles.features_main_page_text
                            ),
                        ),
                        href="http://localhost:3000",
                    ),
                    style=styles.features_main_page_item
                ),
                xt.menu_divider(),

                xt.menu_item(
                    xt.link(
                        xt.hstack(
                            xt.image(
                                src='/interview_prep.png', width='25px', height='25px', mx='4px'
                            ),
                            xt.text(
                                "Interview Preparation Helper",
                                style=styles.features_other_page_text,
                                class_name='text-base pt-2'
                            )
                        ),
                        href="http://localhost:3000/interview_prep",
                    ),
                    style=styles.features_other_page_item

                ),
                xt.menu_item(
                    xt.link(
                        xt.hstack(
                            xt.image(
                                src='/interview_prep.png', width='25px', height='25px', mx='4px'
                            ),
                            xt.text(
                                "Example",
                                style=styles.features_other_page_text,
                                class_name='text-base '
                            ),
                        ),
                        href="http://localhost:3000/interview_prep",
                    ),
                    style=styles.features_other_page_item,

                ),
                style=styles.features_menu_list
            ),
            style=styles.features_menu
        )
    )
