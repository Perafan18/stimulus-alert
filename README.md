
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

  
## Installation 

Install my-project with npm

```bash 
  npm install stimulus-alert
```

or 

```bash 
  yarn add stimulus-alert
```    

Add the controller in your project

```javascript
import { Application } from 'stimulus'
import AlertController from 'stimulus-alert'

const application = Application.start()
application.register('alert', AlertController)
```


## Demo

[stimulus-alert.vercel.app](https://stimulus-alert.vercel.app)
  
## Usage

```javascript
<div data-controller="alert" data-alert-hidden-class-value="hidden">
    <span data-action="click->alert#close">&times;</span>
    Hello, Stimulus!
</div>
```

  
## License

[MIT](https://choosealicense.com/licenses/mit/)

