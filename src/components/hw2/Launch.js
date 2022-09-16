import './style.css'

export default function Launch(props) {

    const {launch} = props;

    return (
        <div className='launch'>
            <h4>{launch.mission_name}</h4>
            <h4>{launch.launch_year}</h4>
            <p>{launch.links.mission_patch_small}</p>
        </div>
    );
}


