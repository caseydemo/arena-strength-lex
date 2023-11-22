import Card from "./UI/Card";
export default function Location() {
    return (
        <Card>
            <h2>Location</h2>
            <p>1183 Brock McVey Dr Unit D, Lexington, KY 40509</p>
            {/* taken directly from google maps */}
            <iframe
                title='Arena Strength & Performance, LLC'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392.82890953357935!2d-84.44865527568216!3d38.03237468164042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88424598c63c2497%3A0x58cbf92be1c4916e!2sArena%20Strength%20%26%20Performance%2C%20LLC!5e0!3m2!1sen!2sus!4v1694000065992!5m2!1sen!2sus'
                width='600'
                height='450'
                style={{ border: 0 }}
                allowFullScreen={true}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
        </Card>
    );
}
