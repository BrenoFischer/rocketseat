import React, { createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

export interface Issue {
  title: string
  createdAt: string
  body: string
  url: string
}

interface IssuesProviderType {
  issues: Issue[]
  fetchIssues: (keywords: string) => void
}

export const IssuesContext = createContext({} as IssuesProviderType)

interface IssuesProviderProps {
  children: React.ReactNode
}

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])

  async function fetchIssues(keywords?: string) {
    const query = `${
      keywords === undefined ? '' : keywords
    }repo:BrenoFischer/rocketseat/`

    const response = await api.get('search/issues', {
      params: {
        q: query,
      },
    })

    const issuesArray = response.data.items.map((issue) => {
      return {
        title: issue.title,
        createdAt: issue.created_at,
        body: issue.body,
        url: issue.url,
      }
    })

    setIssues(issuesArray)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssuesContext.Provider value={{ issues, fetchIssues }}>
      {children}
    </IssuesContext.Provider>
  )
}
