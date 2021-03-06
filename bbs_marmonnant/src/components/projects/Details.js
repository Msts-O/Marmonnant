import React from 'react' ;
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import  moment from 'moment'

const Details = (props) => {
 const { project,auth } = props;
   if (!auth.uid) return <Redirect to= '/signin' />
   if (project){
     return(
    <div className= "project-details">
     <div className="card z-depth-10">
      <div className="card-content">
       <span className="card-title">{ project.title }</span>  #id番号は後ろに添えておく為
        <p>{ project.content }</p>
      </div>
     <div className="card-action gret lighten-4 grey-text">
        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
         <div>{ moment (project.createdAt.toDate()).calender()}</div>
     </div>
     </div>
    </div>
  )
}  else{
    return(
        <div className="container center">
        <p>Loaging project...</p>
    </div>
    )
   }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
  return{
    project: project,
       auth: state.firebase.auth
  }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Details);