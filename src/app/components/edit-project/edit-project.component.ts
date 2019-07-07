import { Component, Output, Input, EventEmitter } from "@angular/core";

import {
	FormBuilder,
	FormControl,
	FormGroup,
	ValidationErrors,
	Validators
} from "@angular/forms";
import { Observable, Observer } from "rxjs";
import { IProject } from "src/app/models/project.interface";

@Component({
	selector: "app-edit-project",
	templateUrl: "./edit-project.component.html",
	styleUrls: ["./edit-project.component.css"]
})
export class EditProjectComponent {
	@Output()
	formData: EventEmitter<any> = new EventEmitter();

	@Input()
	selectProfile: any
	
	@Input()
	userProjects: IProject[]
	validateForm: FormGroup;
	submitForm = ($event: any, value: IProject) => {
		$event.preventDefault();
		for (const key in this.validateForm.controls) {
			this.validateForm.controls[key].markAsDirty();
			this.validateForm.controls[key].updateValueAndValidity();
		}
		this.emitFormData(value);
	};
	emitFormData = value => {
		this.formData.emit(value);
	};
	titleAsyncValidator = (control: FormControl) =>
		new Observable((observer: Observer<ValidationErrors | null>) => {
			setTimeout(() => {
				if (control.value === "New Project") {
					observer.next({ error: true, duplicated: true });
				} else {
					observer.next(null);
				}
				observer.complete();
			}, 1000);
		});

	confirmValidator = (control: FormControl): { [s: string]: boolean } => {
		if (!control.value) {
			return { required: true };
		} else if (control.value !== this.validateForm.controls.password.value) {
			return { confirm: true, error: true };
		}
		return {};
	};

	constructor(private fb: FormBuilder) {
		this.validateForm = this.fb.group({
			title: ["", [Validators.required]],
			profile: ["", [Validators.required], [this.titleAsyncValidator]]
		});
	}
}
