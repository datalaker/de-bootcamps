# Random Forest

Random Forest is an algorithm that provides some crucial improvements to the design of Decision Trees. Simply put, Random Forest is an ensemble of many smaller Decision Trees working together. Random Forest uses the simple concept that the wisdom of crowds is always better than one strong individual. By using lowly correlated small Decision Trees, their ensemble of predictions can outperform any single Decision Tree. The technique that Random Forest uses to ensemble smaller Decision Trees is called bagging. Bagging, also known as bootstrap aggregation, is randomly drawing different subsets, with replacements, from the training data, and the final prediction is decided by majority voting.

Random Forest selects subsets of data from the entirety of training data and trains Decision Trees on each of the subsets separately and then combines the results based on majority voting or averaging for classification or regression, respectively. When building Random Forest, it’s important to notice that not every feature is selected for building each Decision Tree to create diversity while solving the Curse of Dimensionality problem. The ensemble of multiple Decision Trees makes Random Forest very stable in terms of performance. However, Random Forest does come with downfalls as it’s fairly difficult to interpret and is substantially slower than Decision Trees. Due to their speed and interoperability, Decision Trees are usually chosen over Random Forest during quick tests on smaller sets of data. Random Forest is suitable when interoperability is not needed along with a large dataset.

![525591_1_En_1_Fig56_HTML](https://user-images.githubusercontent.com/62965911/230725861-c5d3e71b-1304-479f-bef0-1c93452d9287.jpeg)

Broadly, this technique is known as bagging, or bootstrap aggregating. It’s an interesting idea: without adding any new data, knowledge, or unique learning algorithms, we can increase a model’s performance simply by injecting randomness into the system. We train an ensemble of models, where each one is trained on a randomly selected subset of the data; after training, the predictions of this ensemble are aggregated to form the final prediction.

Interestingly, Random Forest reliably performs better than Decision Tree in most cases. Even given the commonly used explanation of “diversity” and “many thinkers are better than one,” it can be confusing to understand exactly why bagging increases performance if it doesn’t actually introduce unique new learning structures.