import { TabsComponent } from '../tabs/tabs.component';
import { TabsService } from '../tabs/tabs.service';
import { Tab } from '../item/item.model';
import { Subscription } from 'rxjs/Rx';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  tabsForm: FormGroup; // my form for create
  subscription: Subscription; // looks at the object that will be changed
  tab: Tab;

  constructor(private service: TabsService, private formbuilder: FormBuilder) { }

 /**
 * My LIFEcycle methods
 */

  ngOnInit() {
    this.tab = null;
    const tabname = '';
    const tabusername = '';
    const tabemail = '';
    this.tabsForm = this.formbuilder.group({
      name: [tabname, Validators.required],
      username: [tabusername, [Validators.minLength(3), Validators.maxLength(8)]],
      email: [tabemail, Validators.email]
    });
  }

  onSubmit() {
    const newTab = this.tabsForm.value; // creating object for all the value in the form
    this.service.addTab(newTab);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.

  }
}
