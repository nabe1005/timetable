import { ClassListItemComponent } from "./component/class-list-item.mjs";
import { ClassEditPage } from "./pages/class-edit.mjs";
import { ClassListPage } from "./pages/class-list.mjs";
import { HomePage } from "./pages/home.mjs";

// Pages
customElements.define("home-page", HomePage);
customElements.define("class-list-page", ClassListPage);
customElements.define("class-edit-page", ClassEditPage);

// Components
customElements.define("class-list-item", ClassListItemComponent);
