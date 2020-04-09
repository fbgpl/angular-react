import { async, TestBed } from "@angular/core/testing";
import { AngularReactModule } from "../../../angular-react/src/lib/angular-react.module";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [AngularReactModule],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should render react component", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector("react-component").textContent).toContain(
      "This is a regular react component"
    );
  });
});
