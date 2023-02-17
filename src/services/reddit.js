export const API_ROOT = 'https://www.reddit.com'

export const getSubreddits = async () => {
  const res = await fetch(`${API_ROOT}/subreddits.json`)
  const json = await res.json()

  return json.data.children.map((subreddit) => subreddit.data)
}

export const getSubredditPosts = async (subreddit) => {
  const res = await fetch(`${API_ROOT}/r/${subreddit}.json`)
  const json = await res.json()

  return json.data.children.map((post) => post.data)
}
