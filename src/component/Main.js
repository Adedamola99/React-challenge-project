import React from 'react'

const Main = (props) => {

  const keywordList = [props.role, props.level];
  if(props.languages) {
    keywordList.push(...props.languages)
  }

  if(props.tools) {
    keywordList.push(...props.tools)
  }


  const keywordLists = keywordList.map((keywords, index) => {
    return (
      <h3 key={index} onClick= {() => props.handleTagClick(keywords)} className="keyword">{keywords}</h3>
    )
  })

  const styles = {
    borderLeft: "6px solid #6FAAA8"
  }


  return (
      <div>
        <section className="hero">
            <div className="job-box" style={props.featured ? styles : undefined}>
                <div className='info-box'>
                  <div className="info-container">
                      <img src={props.image} alt="" className='company-img'/>
                      <div className='info'>
                        <div className="name-box">
                            <h4 className="name">{props.company}</h4>
                            {props.new && <h5 className="new">NEW!</h5>}
                            {props.featured && <h5 className="featured">FEATURED</h5>}
                        </div>

                        <h3 className="job-title">{props.position}</h3>

                        <div className="period">
                            <span className="date">{props.postedAt}</span> &bull; <span className="type">{props.contract}</span> &bull; <span className="country">{props.location}</span>
                        </div>
                      </div>
                  </div> 

                  <div className="keywords">
                      {keywordLists}
                  </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Main
