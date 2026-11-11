import "./tiercontrol.css";
 
//the order of this list is the ranking, lowest tier first and highest last
const tiers = ["free", "plus", "extra"];
 
//requires is the tier the page needs
//children is the page that is wrapped inside this component
export default function TierControl({ requires, children }) {

  //get the saved user from localStorage
  //localStorage only stores text so JSON.parse turns it back into an object
  const user = JSON.parse(localStorage.getItem("user"));
 
  //if there is no saved user then nobody is logged in
  if (!user) {
    //stops users without an account accessing this page
    return (
      <div className="tiercontrol">
        <h2>Please log in</h2>
        <p>You need an account to see this page.</p>
        <a href="/login">Log in</a>
      </div>
    );
  }
 
  //indexOf finds where the user's tier is in the list (free = 0, plus = 1, extra = 2)
  //if the tier isn't in the list indexOf gives -1, so Math.max will change that to 0 so the user cant see stuff they arent allowed to (free)
  const userRank = Math.max(0, tiers.indexOf(user.account_type));
 
  //find where the tier the page needs is in the list
  const neededRank = tiers.indexOf(requires);
 
  //if the user's number is lower than the page's number they can't see the page
  if (userRank < neededRank) {
    //if the rank of the user is less than whats needed, the user cant access this page
    return (
      <div className="tiercontrol">
        <h2>Upgrade needed</h2>
        <p>This page is part of the {requires} plan.</p>
        <a href="/memberships">See memberships</a>
      </div>
    );
  }
 
  //the user passed both checks so show the page that was wrapped
  return children;
}