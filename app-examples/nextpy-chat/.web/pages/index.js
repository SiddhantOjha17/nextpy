

import "focus-visible/dist/focus-visible"
import "katex/dist/katex.min.css"
import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getRefValue, getRefValues, isTrue, set_val } from "/utils/state"
import { Avatar, Box, Breadcrumb, BreadcrumbItem, Button, Card, CardBody, Code, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, FormControl, Heading, HStack, Image, Input, Link, ListItem, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, OrderedList, Text, UnorderedList, VStack } from "@chakra-ui/react"
import { getEventURL } from "/utils/state.js"
import { CloseIcon, DeleteIcon, HamburgerIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter"
import oneLight from "react-syntax-highlighter/dist/cjs/styles/prism/one-light"
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python"
import { DebounceInput } from "react-debounce-input"
import { SpinningCircles } from "react-loading-icons"
import NextHead from "next/head"



export default function Component() {
  const state__main_state = useContext(StateContexts.state__main_state)
  const [addEvents, connectError] = useContext(EventLoopContext);
  
    const handleSubmitwvxxyjyo = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("state.main_state.process_question", {form_data:form_data})])

        if (false) {
            $form.reset()
        }
    })
    

  return (
    <Fragment>
  <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getEventURL().href}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <VStack sx={{"transition": "left 0.5s, width 0.5s", "position": "relative", "alignItems": "stretch", "justifyContent": "space-between"}}>
  <VStack spacing={`0`} sx={{"bg": "#111", "color": "#fff", "minH": "100vh", "alignItems": "stretch", "justifyContent": "space-between"}}>
  <Box sx={{"bg": "#111", "backdropFilter": "auto", "backdropBlur": "lg", "p": "2", "position": "sticky", "top": "0", "zIndex": "100"}}>
  <HStack justify={`space-between`} sx={{"alignItems": "center", "justifyContent": "space-between"}}>
  <HStack sx={{"alignItems": "center", "justifyContent": "space-between"}}>
  <HamburgerIcon onClick={(_e) => addEvents([Event("state.main_state.toggle_drawer", {})], (_e), {})} sx={{"mr": 4, "cursor": "pointer", "w": "1.2em", "h": "1.2em"}}/>
  <Link as={NextLink} href={`/`}>
  <Box sx={{"p": "1", "borderRadius": "6", "bg": "#F0F0F0", "mr": "2"}}>
  <Image src={`/favicon.ico`} sx={{"width": "1.2em", "height": "auto"}}/>
</Box>
</Link>
  <Breadcrumb>
  <BreadcrumbItem>
  <Text sx={{"size": "sm", "fontWeight": "normal"}}>
  {state__main_state.current_chat}
</Text>
</BreadcrumbItem>
</Breadcrumb>
</HStack>
  <HStack spacing={`6`} sx={{"alignItems": "center", "justifyContent": "space-between"}}>
  <HStack sx={{"bg": "#222327", "rounded": "xl", "paddingX": "4", "paddingY": "1", "alignItems": "center", "justifyContent": "space-between"}}>
  <Image className={`min-w-[1em]`} src={`/Frame.svg`} sx={{"width": "1em", "height": "auto"}}/>
  <Input placeholder={`Ask the smartest AI agent`} sx={{"display": ["none", "none", "none", "flex", "flex"], "_placeholder": {"color": "#6C7275", "fontSize": "13px"}, "paddingRight": "8", "paddingBottom": "1"}} type={`text`} variant={`unstyled`}/>
</HStack>
  <Menu sx={{"bg": "#141718", "border": "red"}}>
  <MenuButton className={`min-w-[1.2em]`}>
  <Image src={`/Vector.svg`} sx={{"width": "1.2em", "height": "auto"}}/>
</MenuButton>
  <MenuList sx={{"my": "1em", "bg": "#141718", "border": "1.5px solid #222"}}>
  <MenuItem sx={{"bg": "#141718", "color": "#fff"}}>
  <Link as={NextLink} href={`http://localhost:3000`}>
  <HStack sx={{"alignItems": "center", "justifyContent": "space-between"}}>
  <Image src={`/logo.png`} sx={{"width": "25px", "height": "25px", "mx": "4px"}}/>
  <Text sx={{"color": "#f6f6f6", "fontWeight": "medium"}}>
  {`NEXTPY GPT`}
</Text>
</HStack>
</Link>
</MenuItem>
  <MenuDivider sx={{"border": "1px solid #222"}}/>
  <MenuItem sx={{"bg": "#232627", "color": "#fff"}}>
  <Link as={NextLink} href={`http://localhost:3000/interview_prep`}>
  <HStack sx={{"alignItems": "center", "justifyContent": "space-between"}}>
  <Image src={`/interview_prep.png`} sx={{"width": "25px", "height": "25px", "mx": "4px"}}/>
  <Text className={`text-base pt-2`} sx={{"color": "#ffffff", "fontWeight": "medium"}}>
  {`Interview Preparation Helper`}
</Text>
</HStack>
</Link>
</MenuItem>
  <MenuItem sx={{"bg": "#232627", "color": "#fff"}}>
  <Link as={NextLink} href={`http://localhost:3000/interview_prep`}>
  <HStack sx={{"alignItems": "center", "justifyContent": "space-between"}}>
  <Image src={`/interview_prep.png`} sx={{"width": "25px", "height": "25px", "mx": "4px"}}/>
  <Text className={`text-base `} sx={{"color": "#ffffff", "fontWeight": "medium"}}>
  {`Example`}
</Text>
</HStack>
</Link>
</MenuItem>
</MenuList>
</Menu>
  <Menu sx={{"bg": "#111", "border": "red"}}>
  <MenuButton>
  <Avatar name={`User`} size={`sm`} sx={{"shadow": "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;", "color": "#fff", "bg": "#222327"}}/>
  <Box/>
</MenuButton>
  <MenuList sx={{"bg": "#111", "border": "1.5px solid #222"}}>
  <MenuItem sx={{"bg": "#111", "color": "#fff"}}>
  {`Help`}
</MenuItem>
  <MenuDivider sx={{"border": "1px solid #222"}}/>
  <MenuItem sx={{"bg": "#111", "color": "#fff"}}>
  {`Settings`}
</MenuItem>
</MenuList>
</Menu>
</HStack>
</HStack>
</Box>
  <VStack className={`rounded-md`} sx={{"width": "92%", "alignSelf": "center", "bg": "#222327", "minH": "100vh", "alignItems": "stretch", "justifyContent": "space-between"}}>
  <VStack className={`max-w-full md:max-w-[92%] h-screen scroll-smooth scrollbar-none scroll-auto`} sx={{"alignSelf": "center", "bg": "#222327", "flex": "1", "mx": "auto", "overflowY": "hidden", "width": "90%", "alignItems": "stretch", "justifyContent": "space-between"}}>
  <Card sx={{"bg": "#00ADB5", "color": "black", "m": "1em", "width": "30%", "display": state__main_state.display_val}}>
  <CardBody>
  <HStack sx={{"alignItems": "center", "justifyContent": "space-between"}}>
  <Image src={`/logo.png`} sx={{"height": "30px", "paddingRight": "4px", "width": "30px"}}/>
  <Text sx={{"fontSize": "sm", "fontWeight": "bold"}}>
  {`Hello! Welcome to NextpyGPT`}
</Text>
</HStack>
</CardBody>
</Card>
  <Box>
  {state__main_state.chats[state__main_state.current_chat].map((gmwotila, fxrqxwor) => (
  <Box key={fxrqxwor} sx={{"width": "100%"}}>
  <Box className={`flex flex-row items-center font-['Inter']`} sx={{"textAlign": "left"}}>
  <Image className={`bg-[#7e57c2] rounded-full ml-2`} src={`/avatar.png`} sx={{"width": "25px", "height": "25px"}}/>
  <Text sx={{"fontSize": "15.25px", "shadow": "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;", "color": "#E3E3E3", "display": "inline-block", "p": "3", "borderRadius": "xl"}}>
  {gmwotila.question}
</Text>
</Box>
  <Box className={`rounded-lg`} sx={{"textAlign": "left", "bg": "#111", "p": "4", "width": "100%"}}>
  <HStack>
  <Image src={`/avatar_smile.png`} sx={{"width": "25px", "height": "25px"}}/>
  <VStack className={`text-base pl-1`}>
  <ReactMarkdown components={{"h1": ({children, ...props}) => <Heading as={`h1`} size={`2xl`} sx={{"marginY": "0.5em"}} {...props}>   {children} </Heading>, "h2": ({children, ...props}) => <Heading as={`h2`} size={`xl`} sx={{"marginY": "0.5em"}} {...props}>   {children} </Heading>, "h3": ({children, ...props}) => <Heading as={`h3`} size={`lg`} sx={{"marginY": "0.5em"}} {...props}>   {children} </Heading>, "h4": ({children, ...props}) => <Heading as={`h4`} size={`md`} sx={{"marginY": "0.5em"}} {...props}>   {children} </Heading>, "h5": ({children, ...props}) => <Heading as={`h5`} size={`sm`} sx={{"marginY": "0.5em"}} {...props}>   {children} </Heading>, "h6": ({children, ...props}) => <Heading as={`h6`} size={`xs`} sx={{"marginY": "0.5em"}} {...props}>   {children} </Heading>, "p": ({children, ...props}) => <Text sx={{"marginY": "1em"}} {...props}>   {children} </Text>, "ul": ({children, ...props}) => <UnorderedList sx={{"marginY": "1em"}} {...props}>   {children} </UnorderedList>, "ol": ({children, ...props}) => <OrderedList sx={{"marginY": "1em"}} {...props}>   {children} </OrderedList>, "li": ({children, ...props}) => <ListItem sx={{"marginY": "0.5em"}} {...props}>   {children} </ListItem>, "a": ({children, ...props}) => <Link as={``} {...props}>   {children} </Link>, "code": ({inline, className, children, ...props}) => {     const match = (className || '').match(/language-(?<lang>.*)/);     const language = match ? match[1] : '';     if (language) {     (async () => {       try {         const module = await import(`react-syntax-highlighter/dist/cjs/languages/prism/${language}`);         SyntaxHighlighter.registerLanguage(language, module.default);       } catch (error) {         console.error(`Error importing language module for ${language}:`, error);       }     })();   }     return inline ? (         <Code {...props}>   {children} </Code>     ) : (         <SyntaxHighlighter customStyle={{"marginY": "1em"}} language={language} style={oneLight} sx={{"marginY": "1em"}} children={String(children)} {...props}/>     );       }, "codeblock": ({children, ...props}) => <SyntaxHighlighter customStyle={{"marginY": "1em"}} language={`python`} style={oneLight} sx={{"marginY": "1em"}} {...props}/>}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]} sx={{"color": "white", "fontSize": "12px", "shadow": "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;"}}>
  {gmwotila.answer}
</ReactMarkdown>
</VStack>
</HStack>
  <HStack sx={{"px": "9"}}>
  <Button className={`border border-[#393E44] w-6`} onClick={(_e) => addEvents([Event("state.main_state.toggle_like", {index:gmwotila.index})], (_e), {})} sx={{"className": "rounded-sm", "height": "20px", "maxW": "20px", "maxH": "20px", "minW": "20px", "minH": "20px", "padding": "0.5", "width": "20px", "bg": "#111111", "_hover": {"bg": "#111111"}}}>
  <Image src={`/thumbs-up.png`}/>
</Button>
  <Button className={`border border-[#393E44] w-6`} onClick={(_e) => addEvents([Event("state.main_state.toggle_dislike", {index:gmwotila.index})], (_e), {})} sx={{"className": "rounded-sm", "height": "20px", "maxW": "20px", "maxH": "20px", "minW": "20px", "minH": "20px", "padding": "0.5", "width": "20px", "bg": "#111111", "_hover": {"bg": "#111111"}}}>
  <Image src={`/thumbs-down.png`}/>
</Button>
  <Button className={`border border-[#393E44] w-6`} onClick={(_e) => addEvents([Event("state.main_state.toggle_dislike", {index:gmwotila.index})], (_e), {})} sx={{"className": "rounded-sm", "height": "20px", "maxW": "20px", "maxH": "20px", "minW": "20px", "minH": "20px", "padding": "0.5", "width": "20px", "bg": "#111111", "_hover": {"bg": "#111111"}}}>
  <Image src={`/share-06.png`}/>
</Button>
  <Button className={`border border-[#393E44] w-6`} onClick={(_e) => addEvents([Event("state.main_state.toggle_dislike", {index:gmwotila.index})], (_e), {})} sx={{"className": "rounded-sm", "height": "20px", "maxW": "20px", "maxH": "20px", "minW": "20px", "minH": "20px", "padding": "0.5", "width": "20px", "bg": "#111111", "_hover": {"bg": "#111111"}}}>
  <Image src={`/mirror.png`}/>
</Button>
</HStack>
</Box>
</Box>
))}
</Box>
</VStack>
  <Box sx={{"bg": "#222327", "position": "sticky", "bottom": "0", "left": "0", "py": "6", "backdropFilter": "auto", "backdropBlur": "lg", "borderTop": "1px solid #222327", "alignItems": "center", "width": "100%"}}>
  <VStack sx={{"maxW": "9xl", "width": "90%", "mx": "auto", "alignItems": "stretch", "justifyContent": "space-between"}}>
  <Box as={`form`} onSubmit={handleSubmitwvxxyjyo}>
  <FormControl isDisabled={state__main_state.processing} sx={{"bg": "#141718", "borderColor": "#BDC1C6", "rounded": "3xl", "borderWidth": "1px", "alignSelf": "center", "_hover": {"borderColor": "#5535d4"}, "mx": "auto"}}>
  <HStack sx={{"alignItems": "center", "justifyContent": "space-between"}}>
  <DebounceInput debounceTimeout={50} element={Input} onChange={(_e0) => addEvents([Event("state.main_state.set_question", {value:_e0.target.value})], (_e0), {})} placeholder={`Type something...`} sx={{"paddingLeft": "6", "borderWidth": "0px", "_placeholder": {"color": "#fffa"}, "py": "4px"}} type={`text`} value={state__main_state.question} variant={`unstyled`}/>
  <Button sx={{"bg": "#141718", "borderWidth": "0px", "rounded": "3xl", "shadow": "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;", "color": "#fff", "_hover": {"bg": "#141718"}}} type={`submit`}>
  <Fragment>
  {isTrue(state__main_state.processing) ? (
  <Fragment>
  <SpinningCircles height={`1em`}/>
</Fragment>
) : (
  <Fragment>
  <Image src={`send.svg`} sx={{"width": "1.5em", "height": "auto"}}/>
</Fragment>
)}
</Fragment>
</Button>
</HStack>
</FormControl>
</Box>
</VStack>
</Box>
</VStack>
  <Drawer isOpen={state__main_state.drawer_open} placement={`left`}>
  <DrawerOverlay>
  <DrawerContent sx={{"bg": "#111", "color": "#fff", "opacity": "0.9"}}>
  <DrawerHeader>
  <HStack sx={{"alignItems": "center", "justifyContent": "space-between"}}>
  <Text>
  {`Chats`}
</Text>
  <CloseIcon onClick={(_e) => addEvents([Event("state.main_state.toggle_drawer", {})], (_e), {})} sx={{"fontSize": "md", "color": "#fff8", "_hover": {"color": "#fff"}, "cursor": "pointer", "w": "8"}}/>
</HStack>
</DrawerHeader>
  <DrawerBody>
  <VStack alignItems={`stretch`} sx={{"alignItems": "stretch", "justifyContent": "space-between"}}>
  {state__main_state.chat_titles.map((lsovrtaj, oguklumw) => (
  <HStack key={oguklumw} sx={{"color": "#fff", "cursor": "pointer"}}>
  <Box onClick={(_e) => addEvents([Event("state.main_state.set_chat", {chat_name:lsovrtaj})], (_e), {})} sx={{"border": "double 1px transparent", "borderRadius": "10px", "backgroundImage": "linear-gradient(#111, #111), radial-gradient(circle at top left, #5535d4,#141718)", "backgroundOrigin": "border-box", "backgroundClip": "padding-box, border-box", "padding": "2", "_hover": {"backgroundImage": "linear-gradient(#111, #111), radial-gradient(circle at top left, #5535d4,#6649D8)"}, "color": "#fff8", "flex": "1"}}>
  {lsovrtaj}
</Box>
  <Box sx={{"border": "double 1px transparent", "borderRadius": "10px", "backgroundImage": "linear-gradient(#111, #111), radial-gradient(circle at top left, #5535d4,#141718)", "backgroundOrigin": "border-box", "backgroundClip": "padding-box, border-box", "padding": "2", "_hover": {"backgroundImage": "linear-gradient(#111, #111), radial-gradient(circle at top left, #5535d4,#6649D8)"}, "color": "#fff8", "flex": "1"}}>
  <DeleteIcon onClick={(_e) => addEvents([Event("state.main_state.delete_chat", {})], (_e), {})} sx={{"fontSize": "md", "color": "#fff8", "_hover": {"color": "#fff"}, "cursor": "pointer", "w": "8"}}/>
</Box>
</HStack>
))}
</VStack>
</DrawerBody>
</DrawerContent>
</DrawerOverlay>
</Drawer>
</VStack>
</VStack>
  <NextHead>
  <title>
  {`Index`}
</title>
  <meta content={`A Nextpy app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
  <meta content={`width=device-width, shrink-to-fit=no, initial-scale=1`} name={`viewport`}/>
</NextHead>
</Fragment>
  )
}
