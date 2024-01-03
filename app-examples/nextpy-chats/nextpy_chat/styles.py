import nextpy as xt
from nextpy_chat.State.state import State


accent_color = "#5535d4"
accent_dark = "#141718"
accent_light = "#6649D8"

bg_dark_color = "#111"
bg_medium_color = "#222"
border_color = "#222327"

icon_color = "#fff8"

shadow_light = "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;"
shadow = "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;"

text_light_color = "#fff"


# PAGE WRAPPER
page_wrapper = dict(
    bg=bg_dark_color,
    color=text_light_color,
    min_h="100vh",
    spacing="0"
)
page_chat_wrapper = dict(
    align_self="center",
    bg=border_color,
    min_h="100vh",
    width="92%"
)
page_chat_wrapper_tailwind = 'rounded-md'


# TEMPLATE PAGE
template_page = dict(
    transition="left 0.5s, width 0.5s",
    position="relative"
)


# COMPONENTS

# CHAT
message_question_text = dict(
    font_size='12px',
    shadow=shadow_light
)
message_question_box = dict(
    text_align="left"
)
message_question_box_tailwind = "flex flex-row items-center font-['Inter']"
message_answer_markdown = dict(
    color="white",
    font_size='12px',
    shadow=shadow_light
)
message_answer_vstack_tailwind = 'text-base pl-1'
reaction_button = dict(
    class_name='rounded-sm',
    height='20px',
    max_w="20px",
    max_h='20px',
    min_w='20px',
    min_h='20px',
    padding='1',
    width='20px'
)
reaction_button_hstack = dict(
    px='14'
)
message_answer_box = dict(
    text_align="left",
    bg=bg_dark_color,
    p='4',
    width="100%"
)
message_answer_box_tailwind = "rounded-lg"
message_box = dict(
    width='100%'
)
message_style = dict(
    display="inline-block",
    p="3",
    border_radius="xl",
)

chat_card_image = dict(
    height="30px",
    padding_right='4px',
    width="30px"
)
chat_card_text = dict(
    font_size="sm",
    font_weight="bold"
)
chat_card = dict(
    bg='#00ADB5',
    color="black",
    m='1em',
    width="30%"
)
chat_vstack = dict(
    align_self="center",
    bg=border_color,
    flex="1",
    mx='auto',
    overflow_y="hidden",
    width="90%"
)
chat_vstack_tailwind = "max-w-full md:max-w-[92%] h-screen scroll-smooth scrollbar-none scroll-auto"

action_bar_input = dict(
    padding_left="6",
    border_width="0px",
    _placeholder={"color": "#fffa"},
    py="4px",


)
action_bar_button = dict(
    bg=accent_dark,
    border_width="0px",
    rounded="3xl"
)
action_bar_style = dict(
    bg=accent_dark,
    border_color="#BDC1C6",
    rounded='3xl',
    border_width="1px",
    align_self="center",
    _hover={"border_color": accent_color},
    mx='auto'
)
action_bar_vstack = dict(
    max_w="9xl",
    width="90%",
    mx="auto"
)
action_bar_box = dict(
    bg=border_color,
    position="sticky",
    bottom="0",
    left="0",
    py="6",
    backdrop_filter="auto",
    backdrop_blur="lg",
    border_top=f"1px solid {border_color}",
    align_items="center",
    width="100%"
)


# FEATURES
features_button_tailwind = 'min-w-[1.2em]'
features_main_page_text = dict(
    color='#f6f6f6',
    font_weight='medium'
)
features_main_page_item = dict(
    bg='#141718'
)
features_other_page_text = dict(
    color='#ffffff',
    font_weight='medium',
)
features_other_page_item = dict(

    bg='#232627',

)
features_menu_list = dict(
    my='1em',
    bg='#141718'
)
features_menu = dict(
    bg='#141718'
)


# MODAL
modal_icon_style = dict(
    color="#fff8",
    cursor="pointer",
    font_size="sm",
    _hover={"color": "#fff"}
)

modal_hstack = dict(
    align_items="center",
    justify_content="space-between"
)

modal_input = dict(
    bg="#222",
    border_color="#fff3",
    _placeholder={"color": "#fffa"}
)

modal_button = dict(
    bg="#5535d4",
    box_shadow="md",
    px="4",
    py="2",
    h="auto",
    _hover={"bg": "#4c2db3"}
)

modal_content = dict(
    bg="#222",
    color="#fff"
)


# NAVBAR FOR ALL PAGES
navbar_hamburger = dict(
    mr=4,
    h="1.2em",
    w="1.2em"
)
navbar_favicon = dict(
    p="1",
    border_radius="6",
    bg="#F0F0F0",
    mr="2"
)
navbar_current_chat = dict(
    font_weight="normal",
    size="sm"
)
navbar_frame = dict(
    height="auto",
    width="1em"
)
navbar_frame_tailwind = 'min-w-[1em]'
navbar_input = dict(
    padding_right="8",
    padding_bottom="1"
)
navbar_hstack_1 = dict(
    bg=border_color,
    rounded="xl",
    padding_x="4",
    padding_y="1"
)
navbar_hstack_2 = dict(
    spacing="6"
)
navbar_hstack = dict(
    justify="space-between"
)
navbar = dict(
    bg=bg_dark_color,
    backdrop_filter="auto",
    backdrop_blur="lg",
    py="2",
    pr="2",
    pl="5",
    position="sticky",
    top="0",
    z_index="100"
)

# SIDEBAR
sidebar_style = {
    "border": "double 1px transparent",
    "border_radius": "10px",
    "background_image": f"linear-gradient({bg_dark_color}, {bg_dark_color}), radial-gradient(circle at top left, {accent_color},{accent_dark})",
    "background_origin": "border-box",
    "background_clip": "padding-box, border-box",
    "padding": "2",
    "_hover": {
        "background_image": f"linear-gradient({bg_dark_color}, {bg_dark_color}), radial-gradient(circle at top left, {accent_color},{accent_light})",
    },
    "color": icon_color,
    "flex": "1",
}


icon_style = dict(
    font_size="md",
    color=icon_color,
    _hover=dict(
        color=text_light_color
    ),
    cursor="pointer",
    w="8",
)


# INTERVIEW

# INTERVIEW CHAT
interview_recording_button = dict(
    bg=accent_dark,
    border_width="0px"
)
interview_message_question_text = dict(
    color="white",
    font_size='12px',
    shadow=shadow_light,
    py='4'
)
interview_message_question_box = dict(
    bg=bg_dark_color,
    p='4',
    my='2 em',
    width="100%"
)
interview_message_question_box_tailwind = "rounded-lg"
interview_message_answer_box = dict(
    text_align="left"
)
interview_message_answer_box_tailwind = "flex flex-row items-center"
interview_message = dict(
    p='1em',
    width="100%"
)
interview_chat_card_image = dict(
    height="30px",
    padding_right='3px',
    width="30px"
)
interview_chat_card_text = dict(
    font_size='15.25px',
    font_weight="medium",
)
interview_chat_card = dict(
    bg='#141718',
    color="#ffffff",
    width="47%",
)
interview_chat_button = dict(
    bg='#FEFEFE',
    color="black",
    my='1em',
    _hover={
        "bg": '#FEFEFE',
    },
)
interview_chat_button_tailwind = 'w-max'
interview_chat = dict(
    m='1em',
    align_self="center",
    bg=border_color,
    flex="1",
    mx='auto',
    overflow_y="hidden",
    width="90%",
)
interview_chat_tailwind = "max-w-full md:max-w-[92%] h-screen scroll-smooth scrollbar-none scroll-auto"


input_style = dict(
    bg=accent_dark,
    border_color="#BDC1C6",
    border_width="1px",
    p="6",
    rounded='3xl',
)


# BASE STYLE
base_style = {
    xt.Avatar: {
        "shadow": shadow,
        "color": text_light_color,
        "bg": border_color,
    },
    xt.Button: {
        "shadow": shadow,
        "color": text_light_color,
        "_hover": {
            "bg": accent_dark,
        },
    },
    xt.Menu: {
        "bg": bg_dark_color,
        "border": f"red",
    },
    xt.MenuList: {
        "bg": bg_dark_color,
        "border": f"1.5px solid {bg_medium_color}",
    },
    xt.MenuDivider: {
        "border": f"1px solid {bg_medium_color}",
    },
    xt.MenuItem: {
        "bg": bg_dark_color,
        "color": text_light_color,
    },
    xt.DrawerContent: {
        "bg": bg_dark_color,
        "color": text_light_color,
        "opacity": "0.9",
    },
    xt.Hstack: {
        "align_items": "center",
        "justify_content": "space-between",
    },
    xt.Vstack: {
        "align_items": "stretch",
        "justify_content": "space-between",
    },
}
