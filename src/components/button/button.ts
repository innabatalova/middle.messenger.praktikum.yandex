import Block from '../../utils/Block';
import template from './button.hbs';
import './_button.scss';

class Button extends Block {

  constructor(props: Record<string, any> = {}) {
        super('div', props);
    }
    render() {
        return this.setTemplate(template, this.props);
    }

}

export default Button;