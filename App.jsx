import React from "react"
import getArticles from "./utilities/getArticles"
import Button from "./components/Button"
import Header from "./components/Header"

export default function App() {
  const [numOfArticles, setNumOfArticles] = React.useState(0)
  const [currentArticles, setCurrentArticles] = React.useState(
    getArticles(numOfArticles)
  )

  /* Challenge

	The list items below aren't following the principle of DRY (Don't Repeat Yourself). Your task is to fix that by doing the following: 
	
		1. The list items (lines 32 to 54) should be generated through some sort of iterative 
		   approach, rather than being created manually. 
		
		2. There should automatically be one list item for every object in the currentArticles 
		   array (line 8).
		   
		3. If numOfArticles (line 7) stays the same number (4), the app should look identical after 
		   completing these tasks. However, if numOfArticles is changed to a higher or lower number,a corresponding number of list items should be rendered. Test this!  
*/
  return (
    <div className="wrapper">
      <Header />
      <main>
        <ul>
          {/*------------List items below!-------------------------------------------------------*/}

          {currentArticles.length > 0 ? (
            currentArticles.map((article) => (
              <li className="article">
                <a href={article.link} target="_blank">
                  {article.title}
                </a>
              </li>
            ))
          ) : (
            <li className="article">No articles</li>
          )}

          {/*------------List items above!-------------------------------------------------------*/}
        </ul>
        <Button
          numOfArticles={numOfArticles}
          setCurrentArticles={setCurrentArticles}
        />
      </main>
    </div>
  )
}
