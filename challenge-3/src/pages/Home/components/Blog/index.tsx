import { useContext } from 'react'
import { BlogContainer, CardsContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { Issue, IssuesContext } from '../../../../contexts/IssuesContext'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

interface CardProps {
  issue: Issue
}

function Card({ issue }: CardProps) {
  return (
    <Link to={`/${issue.number}`}>
      <li>
        <header>
          <h3>{issue.title}</h3>
          <span>
            {formatDistanceToNow(new Date(issue.createdAt), {
              addSuffix: true,
            })}
          </span>
        </header>
        <p>
          {/* Programming languages all have built-in data structures, but these often
          differ from one language to another. This article attempts to list the
          built-in data structures available in JavaScript and what properties
          they have. These can be used to build other data structures. Wherever
          possible, comparisons with other languages are drawn. Dynamic typing
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all types:
          let foo = 42; // foo is now a number foo = `&quot;`bar`&quot;`; // foo
          is now a string foo = true; // foo is now a boolean */}
          {issue.body}
        </p>
      </li>
    </Link>
  )
}

type SearchIssueInputs = {
  keywords: string
}

export function Blog() {
  const { issues, fetchIssues } = useContext(IssuesContext)

  const { register, handleSubmit } = useForm<SearchIssueInputs>()

  function handleSearchIssue(data: SearchIssueInputs) {
    fetchIssues(data.keywords)
  }

  return (
    <BlogContainer>
      <header>
        <div>
          <h3>Posts</h3>
          <span>6 Posts</span>
        </div>
        <form onSubmit={handleSubmit(handleSearchIssue)}>
          <input
            type="text"
            placeholder="Search Post"
            {...register('keywords')}
          />
        </form>
      </header>
      <CardsContainer>
        {issues.map((issue) => {
          return <Card key={issue.title} issue={issue} />
        })}
      </CardsContainer>
    </BlogContainer>
  )
}
