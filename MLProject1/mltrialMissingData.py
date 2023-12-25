import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import sklearn
from sklearn import model_selection
from sklearn.impute import SimpleImputer
dataset = pd.read_csv('MLProject1/brittleness-index.csv')
print(dataset)