import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  GithubLogo,
  Users,
} from '@phosphor-icons/react'
import { api } from '../../lib/axios'
import {
  IssueBody,
  IssueInformationContainer,
  IssueInformationIconsContainer,
  IssuePageContainer,
} from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

interface IssuePageType {
  title: string
  createdAt: string
  body: string
  comments: string
  user: string
  url: string
}

interface IssueInformationComponentProps {
  issue: IssuePageType
}

function IssueInformationComponent({ issue }: IssueInformationComponentProps) {
  return (
    <IssueInformationContainer>
      <header>
        <Link to="/">
          <ArrowLeft size={12} />
          <span>Back</span>
        </Link>
        <a href={issue.url} target="_blank" rel="noreferrer">
          <span>See on Github</span> <ArrowUpRight size={12} />
        </a>
      </header>
      <h2>{issue.title}</h2>
      <IssueInformationIconsContainer>
        <div>
          <GithubLogo size={18} />
          <span>{issue.user}</span>
        </div>
        <div>
          <Calendar size={18} />
          <span>
            {formatDistanceToNow(new Date(issue.createdAt), {
              addSuffix: true,
            })}
          </span>
        </div>
        <div>
          <Users size={18} />
          <span>{issue.comments} Comments</span>
        </div>
      </IssueInformationIconsContainer>
    </IssueInformationContainer>
  )
}

export function IssuePage() {
  const { issueId } = useParams()
  const [issue, setIssue] = useState<IssuePageType>({
    title: 'loading',
    createdAt: new Date().toISOString(),
    body: 'loading',
    comments: 'loading',
    user: 'loading',
    url: 'loading',
  })

  async function fetchIssue(number?: string) {
    const response = await api.get(
      `repos/BrenoFischer/rocketseat/issues/${number}`,
    )

    setIssue({
      title: response.data.title,
      body: response.data.body,
      createdAt: response.data.created_at,
      user: response.data.user.login,
      comments: response.data.comments,
      url: response.data.html_url,
    })
  }

  useEffect(() => {
    fetchIssue(issueId)
  }, [issueId])

  return (
    <IssuePageContainer>
      <IssueInformationComponent issue={issue} />
      <IssueBody>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </IssueBody>
    </IssuePageContainer>
  )
}
