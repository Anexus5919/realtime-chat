import { nanoid } from 'nanoid'
import { useState, useEffect } from 'react'

const ANIMALS = ["wolf", "bear", "shark", "bull", "lion", "tiger", "hawk"]
const STORAGE_KEY = "chat_username"

const generateUsername = () => {
  const word = ANIMALS[Math.floor(Math.random() * ANIMALS.length)]
  return `anonymous-${word}-${nanoid(5)}`
}

export function useUsername() {
  const [username, setUsername] = useState("")

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)

    if (stored) {
      setUsername(stored)
      return
    }

    const generated = generateUsername()
    localStorage.setItem(STORAGE_KEY, generated)
    setUsername(generated)
  }, [])

  return { username }
}

