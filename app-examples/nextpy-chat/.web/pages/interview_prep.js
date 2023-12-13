

import "focus-visible/dist/focus-visible"
import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getRefValue, getRefValues, isTrue, set_val } from "/utils/state"
import { Avatar, Box, Breadcrumb, BreadcrumbItem, Button, Card, CardBody, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, FormControl, HStack, Image, Input, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text, Textarea, VStack } from "@chakra-ui/react"
import { getEventURL } from "/utils/state.js"
import { CloseIcon, DeleteIcon, HamburgerIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
import { DebounceInput } from "react-debounce-input"
import { SpinningCircles } from "react-loading-icons"
import NextHead from "next/head"



export default function Component() {
  
    const handleSubmithqqtukmb = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("state.interview_state.process_interview", {form_data:form_data})])

        if (false) {
            $form.reset()
        }
    })
    
  
    const handleSubmitbqpursxq = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("state.interview_state.process_interview", {form_data:form_data})])

        if (false) {
            $form.reset()
        }
    })
    
  const state__main_state = useContext(StateContexts.state__main_state)
  const state__interview_state = useContext(StateContexts.state__interview_state)
  const [addEvents, connectError] = useContext(EventLoopContext);

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
  <Box sx={{"bg": "#111", "backdropFilter": "auto", "backdropBlur": "lg", "py": "2", "pr": "2", "pl": "5", "position": "sticky", "top": "0", "zIndex": "100"}}>
  <HStack sx={{"justify": "space-between", "alignItems": "center", "justifyContent": "space-between"}}>
  <HStack sx={{"alignItems": "center", "justifyContent": "space-between"}}>
  <HamburgerIcon sx={{"mr": 4, "h": "1.2em", "w": "1.2em", "cursor": "pointer"}}/>
  <Link as={NextLink} href={`/`}>
  <Box sx={{"p": "1", "borderRadius": "6", "bg": "#F0F0F0", "mr": "2"}}>
  <Image src={`/favicon.ico`} sx={{"width": "1.2em", "height": "auto"}}/>
</Box>
</Link>
  <Breadcrumb>
  <BreadcrumbItem>
  <Text sx={{"fontWeight": "normal", "size": "sm"}}>
  {state__interview_state.interview_chat}
</Text>
</BreadcrumbItem>
</Breadcrumb>
</HStack>
  <HStack sx={{"spacing": "6", "alignItems": "center", "justifyContent": "space-between"}}>
  <HStack sx={{"bg": "#222327", "rounded": "xl", "paddingX": "4", "paddingY": "1", "alignItems": "center", "justifyContent": "space-between"}}>
  <Image className={`min-w-[1em]`} src={`/Frame.svg`} sx={{"height": "auto", "width": "1em"}}/>
  <Input placeholder={`Prepare for your Interviews ...`} sx={{"paddingRight": "8", "paddingBottom": "1", "display": ["none", "none", "none", "flex", "flex"], "_placeholder": {"color": "#6C7275", "fontSize": "13px"}}} type={`text`} variant={`unstyled`}/>
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
  <VStack className={`max-w-full md:max-w-[92%] h-screen scroll-smooth scrollbar-none scroll-auto`} sx={{"m": "1em", "alignSelf": "center", "bg": "#222327", "flex": "1", "mx": "auto", "overflowY": "hidden", "width": "90%", "alignItems": "stretch", "justifyContent": "space-between"}}>
  <VStack sx={{"m": "6em", "display": state__interview_state.interview_option, "alignItems": "stretch", "justifyContent": "space-between"}}>
  <Card sx={{"bg": "#141718", "color": "#ffffff", "width": "47%"}}>
  <CardBody>
  <HStack sx={{"alignItems": "center", "justifyContent": "space-between"}}>
  <Image src={`/logo.png`} sx={{"height": "30px", "paddingRight": "3px", "width": "30px"}}/>
  <Text className={`md:text-base text-xs`} sx={{"fontSize": "15.25px", "fontWeight": "medium"}}>
  {`Add job description or job keyword below and press submit to start with interview`}
</Text>
</HStack>
</CardBody>
</Card>
  <Box as={`form`} onSubmit={handleSubmitbqpursxq}>
  <DebounceInput debounceTimeout={50} element={Textarea} isRequired={true} onChange={(_e0) => addEvents([Event("state.interview_state.set_job_desc", {value:_e0.target.value})], (_e0), {})} placeholder={`Enter Job Description`} value={state__interview_state.job_desc}/>
  <FormControl>
  <Button className={`w-max`} sx={{"bg": "#FEFEFE", "color": "black", "my": "1em", "_hover": {"bg": "#FEFEFE"}, "shadow": "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;"}} type={`submit`}>
  <Text>
  {`Submit`}
</Text>
</Button>
</FormControl>
</Box>
</VStack>
  <Box>
  {state__interview_state.interview_chats[state__interview_state.interview_chat].map((sgbvqrlp, hadaqkym) => (
  <Box key={hadaqkym} sx={{"p": "1em", "width": "100%"}}>
  <Box className={`rounded-lg`} sx={{"bg": "#111", "p": "4", "my": "2 em", "width": "100%", "textAlign": "left"}}>
  <HStack>
  <Image src={`/avatar_smile.png`} sx={{"width": "25px", "height": "25px"}}/>
  <Text sx={{"color": "white", "fontSize": "12px", "shadow": "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;", "py": "4"}}>
  {sgbvqrlp.question}
</Text>
</HStack>
</Box>
  <Box className={`flex flex-row items-center`} sx={{"textAlign": "left"}}>
  <Image src={`/avatar.png`} sx={{"width": "25px", "height": "25px"}}/>
  <Text sx={{"fontSize": "12px", "shadow": "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;", "display": "inline-block", "p": "3", "borderRadius": "xl"}}>
  {sgbvqrlp.answer}
</Text>
</Box>
</Box>
))}
</Box>
</VStack>
  <Box sx={{"bg": "#222327", "position": "sticky", "bottom": "0", "left": "0", "py": "6", "backdropFilter": "auto", "backdropBlur": "lg", "borderTop": "1px solid #222327", "alignItems": "center", "width": "100%", "display": state__interview_state.interview_convo}}>
  <VStack sx={{"maxW": "9xl", "width": "90%", "mx": "auto", "alignItems": "stretch", "justifyContent": "space-between"}}>
  <Box as={`form`} onSubmit={handleSubmithqqtukmb}>
  <FormControl isDisabled={state__interview_state.interview_processing} sx={{"bg": "#141718", "borderColor": "#BDC1C6", "rounded": "3xl", "borderWidth": "1px", "alignSelf": "center", "_hover": {"borderColor": "#5535d4"}, "mx": "auto"}}>
  <HStack sx={{"alignItems": "center", "justifyContent": "space-between"}}>
  <DebounceInput debounceTimeout={50} element={Input} onChange={(_e0) => addEvents([Event("state.interview_state.set_interview_answer", {value:_e0.target.value})], (_e0), {})} placeholder={`Type something...`} sx={{"paddingLeft": "6", "borderWidth": "0px", "_placeholder": {"color": "#fffa"}, "py": "4px"}} type={`text`} value={state__interview_state.interview_answer}/>
  <Button onClick={(_e) => addEvents([Event("state.interview_state.start_recording", {})], (_e), {})} sx={{"bg": "#141718", "borderWidth": "0px", "shadow": "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;", "color": "#fff", "_hover": {"bg": "#141718"}}}>
  <Fragment>
  {isTrue(state__interview_state.recording) ? (
  <Fragment>
  <Image src={`/listen.png`} sx={{"width": "2em", "height": "auto"}}/>
</Fragment>
) : (
  <Fragment>
  <Image src={`/mike.png`} sx={{"width": "2em", "height": "auto"}}/>
</Fragment>
)}
</Fragment>
</Button>
  <Button sx={{"bg": "#141718", "borderWidth": "0px", "rounded": "3xl", "shadow": "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;", "color": "#fff", "_hover": {"bg": "#141718"}}} type={`submit`}>
  <Fragment>
  {isTrue(state__interview_state.interview_processing) ? (
  <Fragment>
  <SpinningCircles height={`1em`}/>
</Fragment>
) : (
  <Fragment>
  <Image src={`/send.svg`} sx={{"width": "1.5em", "height": "auto"}}/>
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
  {state__main_state.chat_titles.map((zmunqosb, clcfmzbk) => (
  <HStack key={clcfmzbk} sx={{"color": "#fff", "cursor": "pointer"}}>
  <Box onClick={(_e) => addEvents([Event("state.main_state.set_chat", {chat_name:zmunqosb})], (_e), {})} sx={{"border": "double 1px transparent", "borderRadius": "10px", "backgroundImage": "linear-gradient(#111, #111), radial-gradient(circle at top left, #5535d4,#141718)", "backgroundOrigin": "border-box", "backgroundClip": "padding-box, border-box", "padding": "2", "_hover": {"backgroundImage": "linear-gradient(#111, #111), radial-gradient(circle at top left, #5535d4,#6649D8)"}, "color": "#fff8", "flex": "1"}}>
  {zmunqosb}
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
  {`InterviewPrep`}
</title>
  <meta content={`A Nextpy app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
  <meta content={`width=device-width, shrink-to-fit=no, initial-scale=1`} name={`viewport`}/>
</NextHead>
</Fragment>
  )
}
