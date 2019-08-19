import { Component, Output, Input, EventEmitter, OnInit } from "@angular/core";

import {
	FormBuilder,
	FormControl,
	FormGroup,
	ValidationErrors,
	Validators
} from "@angular/forms";
import { Observable, Observer } from "rxjs";
import { IProject } from "src/app/models/project.interface";
import { IUser } from "src/app/models/user.interface";

@Component({
	selector: "app-save-project",
	templateUrl: "./save-project.component.html",
	styleUrls: ["./save-project.component.css"]
})
export class EditProjectComponent implements OnInit {
	@Output()
	formData: EventEmitter<any> = new EventEmitter();

	@Input()
	selectLoggedInUser: IUser;

	@Input()
	selectedProject: IProject;
	
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
				if (control.value === "home") {
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

	constructor(private fb: FormBuilder) {}
	/* Sometimes profile comes in as null so we need to catch that */
	ngOnInit() {
		this.validateForm = this.fb.group({
			profile: [
				this.selectLoggedInUser.profile,
				[Validators.required],
				[this.titleAsyncValidator]
			],
			title: [this.selectedProject.title, [Validators.required]],
			type: [this.selectedProject.type]
		});
	}
}