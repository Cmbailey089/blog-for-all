module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },

    format_date: (date) => {
      return date.toLocaleDateString();
    },

    auto_cap: (str)=> {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}