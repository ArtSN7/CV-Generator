import '../styles/languages.css';

function Languages() {

    return (
        <>
        <div class="form-container">
            <h1>Languages</h1>
            <form>
                <div class="form-group">
                <input type="language" name="language" placeholder="Spanish" required />
                <select id="level" required>
                    <option value="basic">Basic</option>
                    <option value="advanced">Advanced</option>
                    <option value="native">Native</option>
                </select>
                </div>
                <button type="button">Add New Language</button>
            </form>
        </div>
        <div class="form-container">

            <h1>Your data:</h1>

            <p>Spanish - Advanced</p>

        </div>
        </>
    );
}

export default Languages;