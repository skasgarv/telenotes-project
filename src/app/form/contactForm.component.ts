import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'contact-form',
    templateUrl: './contactForm.component.html',
})
export class ContactFormComponent {
    @Input('group')
    public contactForm: FormGroup;
}
