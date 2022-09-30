### `npm install target-form-state`

In the project directory:

You can use this hook as a form object which can keep track all the properties of the object.
<br />Each property can change the value to (true or false) depending on the state of form.
<br />For instance..

#### MODEL

export interface City { <br />
&nbsp;&nbsp;&nbsp;&nbsp;cityId?: string; <br />
&nbsp;&nbsp;&nbsp;&nbsp;name: string; <br />
&nbsp;&nbsp;&nbsp;&nbsp;active: boolean;<br />
&nbsp;&nbsp;&nbsp;&nbsp;createdAt?: Date;<br />
&nbsp;&nbsp;&nbsp;&nbsp;updatedAt?: Date;<br />
}

#### REACT COMPONENT

const [cityForm, setCityForm] = useState<City>({<br />
&nbsp;&nbsp;&nbsp;&nbsp;cityId: "",<br />
&nbsp;&nbsp;&nbsp;&nbsp;name: "",<br />
&nbsp;&nbsp;&nbsp;&nbsp;active: true,<br />
});

#### USING TARGET-FORM-STATE

const [cityFormState, setCityFormState, reset] = useFormState<City>(cityForm);

#### SETTING VALIDATION

setCityFormState((prev) => ({ ...prev, [e.target.name]: true }));

#### RESETTING THE STATE OF FORM

reset(cityForm);

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
