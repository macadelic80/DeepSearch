console.log("DS");
class DeepSearch {
	constructor(selector, options){
		this.$input = null;
		this.$div = null;
		this.$dropdown = null;
		this.datas = [];
		this.templates = {};
		this.options = {
				placeholder: options.placeholder || "DeepSearch",
		};
		this.attachToDiv(selector);
	}
	attachToDiv(selector=""){
		const $div = document.querySelector(selector);
		if (!$div) throw new Error("no div$div found");
		this.$div = $div;
	}
	setData(data){
		if (Array.isArray(data)) this.datas.push(...data);
		else this.datas.push(data);
	}
	setTemplate(template){
		this.template = template;
	}
	createAndAppendInput(){
		const $input = document.createElement("input");
		$input.setAttribute("type", "text");
		$input.setAttribute("placeholder", this.options.placeholder);
		this.$input = $input;
		this.$div.appendChild(this.$input);
	}
	createAndAppendDropdown(){
		const $dropdown = document.createElement("ul");
		$dropdown.classList.add("dropdown");
		this.$dropdown = $dropdown;
		this.$div.appendChild(this.$dropdown);
		this.$dropdown.hidden = false;
		this.$dropdown.width = this.$input.clientWidth;
	}
	populateDropdown(){
		const data = ["haha", "bb", "cc"];
		const $dropdown = this.$dropdown;
		data.forEach(item => {
			const $li = document.createElement("li");
			$li.classList.add("dropdown-item");
			$li.innerText = item;
			$dropdown.appendChild($li);
		})
	}
	render(){
		this.createAndAppendInput();
		this.createAndAppendDropdown();
		this.populateDropdown();
	}
}