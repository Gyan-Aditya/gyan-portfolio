import { Timeline } from "../components/Timeline"
import {educations} from "../constants"
const Educations = () => {
  return (
    <div id="education" className="w-full ">
      <Timeline data={educations}/>
    </div>
  )
}

export default Educations
