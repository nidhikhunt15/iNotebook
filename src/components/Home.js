import Notes from './Notes';

export const Home = (props) => {
  const {showAlert}=props
  return (
    <div>
     <Notes mode={props.mode} showAlert={showAlert} />
    </div>
  )
}

export default Home
