import TopicList from "@/components/TopicList";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="topic-list">
              <TopicList />
              <TopicList />
              <TopicList />              <TopicList />  <TopicList />  <TopicList />  <TopicList />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
