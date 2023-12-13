import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop } from "/utils/state.js"

export const initialState = {"state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "state.interview_state": {"index": {"Interview": 0}, "interview_answer": "", "interview_chat": "Interview", "interview_chats": {"Interview": []}, "interview_convo": "none", "interview_option": "visible", "interview_processing": false, "interview_prompt": "", "job_desc": "", "recording": false, "text": ""}, "state.main_state": {"chat_titles": ["Intros"], "chats": {"Intros": []}, "current_chat": "Intros", "display_val": "visible", "drawer_open": false, "index": {"Intros": 0}, "modal_open": false, "new_chat_name": "", "processing": false, "question": ""}}

export const ColorModeContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  state: createContext(null),
  state__interview_state: createContext(null),
  state__main_state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}}

export const initialEvents = () => [
    Event('state.hydrate', hydrateClientStorage(clientStorage)),
]

export const isDevMode = true

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectError] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectError]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [state, dispatch_state] = useReducer(applyDelta, initialState["state"])
  const [state__interview_state, dispatch_state__interview_state] = useReducer(applyDelta, initialState["state.interview_state"])
  const [state__main_state, dispatch_state__main_state] = useReducer(applyDelta, initialState["state.main_state"])
  const dispatchers = useMemo(() => {
    return {
      "state": dispatch_state,
      "state.interview_state": dispatch_state__interview_state,
      "state.main_state": dispatch_state__main_state,
    }
  }, [])

  return (
    <StateContexts.state.Provider value={ state }>
    <StateContexts.state__interview_state.Provider value={ state__interview_state }>
    <StateContexts.state__main_state.Provider value={ state__main_state }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.state__main_state.Provider>
    </StateContexts.state__interview_state.Provider>
    </StateContexts.state.Provider>
  )
}